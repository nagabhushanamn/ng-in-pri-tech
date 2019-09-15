
let Rx = require('rxjs')
let Subject = Rx.Subject;



//---------------------------------------
// trainer => dependency / producer
//---------------------------------------

const trainer = {
    getSingleSubject() {
        //...
        return "sub-1";
    },
    getManySubjects() {
        let it = {
            [Symbol.iterator]() {
                let idx = 0;
                return {
                    next() {
                        idx++;
                        let sub = idx <= 3 ? `sub-${idx}` : undefined
                        let done = idx <= 3 ? false : true
                        return { value: sub, done }
                    }
                }
            }
        }
        return it;
    },
    getSingleSubjectAsync() {
        //
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("trainer resolving promise..");
                resolve("sub1") // push
            }, 3000);
        });
        return promise;
    },
    getManySubjectsAsync() {
        let stream = new Subject();
        let idx = 0;
        let interval = setInterval(() => {
            idx++;
            if (idx > 3) {
                clearInterval(interval); return;
                stream.complete();
            }
            console.log("trainer propagating new sub into stream");
            stream.next("sub-" + idx);  // push
        }, 2000)
        return stream;
    }
}



//---------------------------------------
// employee => dependent / consumer
//---------------------------------------

const emp = {
    doWork() {

        // #1
        // const sub1 = trainer.getSingleSubject(); // pull / sync / blocking-call
        // console.log("learning " + sub1);
        // console.log("emp start working...");


        // #2
        // const it = trainer.getManySubjects(); 
        // for (let sub of it) { // pull / sync / blocking-call
        //     console.log("learning " + sub);
        // }
        // console.log("emp start working...");


        // #3
        // console.log("employee requesting single subject..");
        // let promise = trainer.getSingleSubjectAsync()
        // console.log("employee got promise , defer actions to future");
        // promise
        //     .then(result => {
        //         console.log("employee got result.. ")
        //         console.log("learning " + result + " async..");
        //     })
        // console.log("emp start working with other task");


        //#4
        console.log("employee requesting multiple subjects..");
        console.log("employee got stream , defer actions to future");
        let stream = trainer.getManySubjectsAsync()
        stream.subscribe(
            result => {
                console.log("employee got result.. ")
                console.log("learning " + result + " async..")
            },
            error => console.log(error),
            () => console.log("thanks trainer for many subs")
        )
        console.log("emp start working with other task if exist");

    }
}

emp.doWork();