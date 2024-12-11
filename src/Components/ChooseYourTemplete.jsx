import Card from "./Card";


const ChooseYourTemplete = () => {
    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold ">Choose Your Templete </h1>
                <hr className="border-2 border-primary w-1/6 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coverPage.map(item=>  <Card key={item.id} item={item} />)
                }
            </div>


            
        </div>
    );
};

export default ChooseYourTemplete;

const coverPage =[
    {
        'id':1,
        'name':'Notrh South University',
        'image':'https://i.ibb.co.com/LRZD0ct/mini-magick20230313-1-bosn9n.png'
    },
    {
        'id':2,
        'name':'Comilla University',
        'image':'https://i.ibb.co.com/F3CLXqq/thumb-1200-1553.png'
    },
    {
        'id':3,
        "name":'University of Asia Pacific',
        'image':'https://i.ibb.co.com/z6fZZpJ/1.webp' 

    },
    {
        'id':4,
        'name':'University of Dhaka',
        'image':'https://i.ibb.co.com/qN1tV8V/025838953-1-acd4093d8ba911aa8263fe34e1f5bfeb-768x994.png'
    }
    
]