
//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movies{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if (rating === "") {
            this.rating = "PG";
        }
        else{
        this.rating = rating;
        }
    }
    getAllDetails(){
        let data=`
            title:${this.title}
            studio:${this.studio}
            rating:${this.rating}
        `
        return data;
    }
    
    getPG(arr){
        if(arr.rating===""){
            arr.rating="PG";
            let data=`
            title:${this.title}
            studio:${this.studio}
            rating:${this.rating}
        `
        return data;
        }

    }

}
let obj1=new Movies("Casino Royale","Eon Productions","PG­13")
console.log(obj1.getAllDetails())

let obj2=new Movies("Casino Royale","Eon Productions","")
console.log(obj2.getAllDetails())

let movielist=[
    {
        title:"Movie1",
        studio: "studio1",
        rating: ""
    },
    {
        title:"Movie2",
        studio: "studio2",
        rating: "pg34"
    },
    {
        title:"Movie3",
        studio: "studio3",
        rating: "pg5"
    },
    {
        title:"Movie4",
        studio: "studio5",
        rating: ""
    }
];
let newval=movielist.filter((ele,index)=>{
    let x=new Movies(ele.title,ele.studio,ele.rating)
    return x.getPG(ele)
})
console.log(newval)


// output :

// title:Casino Royale
// studio:Eon Productions
// rating:PG­13


// title:Casino Royale
// studio:Eon Productions
// rating:PG

// [
// { title: 'Movie1', studio: 'studio1', rating: 'PG' },
// { title: 'Movie4', studio: 'studio5', rating: 'PG' }
// ]
