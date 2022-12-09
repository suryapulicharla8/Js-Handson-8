

// 1 question solution

let studentRecords = [
         {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } 
    ]
    const stdName=studentRecords.map(element =>(element.name.toUpperCase()));
    console.log(stdName);

    // 2 qusetion solution
    
    const highMark=[];
        studentRecords.forEach(element =>{
            if(element.marks>50){
                highMark.push(element)
            }
        })
        console.log(highMark)

        // 3 question solution

        const highIdMarks=[]
        const highMarks=studentRecords.forEach(element =>{
            if(element.marks>50 && element.id>120){
                highIdMarks.push(element)
            }
        })
        console.log(highIdMarks)

        // 4 question solution
        var sumOfMark=[];
        studentRecords.map(item =>{
            sumOfMark += item.marks
        })

        console.log(sumOfMark)


            // 5 question solution
            const stdMks=[];
        studentRecords.forEach(element =>{
            if(element.marks>50){
                stdMks.push(element.name)
            }
        })
        console.log(stdMks)

        // 6 question solution

        var someOfMarks=[];
        studentRecords.forEach(element =>{
            if(element.id>120){
                someOfMarks +=(element.marks)
            }
        })
        console.log(someOfMarks)

        // 7 question solution
        var totalMarks=[];
        studentRecords.forEach(item =>{
            if(item.marks < 50){
                item.marks +=15
            }
        })
        let gradMarks=[];
        studentRecords.forEach(item =>{
            if(item.marks>50){
                gradMarks +=item.marks
            }
        })
        console.log(gradMarks);

        // 8 question solution
        console.log(studentRecords)

