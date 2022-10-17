import React from 'react'
const Mapfun = () => {
    const data=[
        {
       
        img:"./assets/a.png",
        head:"In-Games Items Crafting",
        text:"In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games",
    },
    {
       
        img:"./assets/b.png",
        head:"Cross chain interpretability & custom wallet",
        text:"DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the",
    },
    {
       
        img:"./assets/c.png",
        head:"Tokenize character Items",
        text:"Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game",
    },
    {
       
        img:"./assets/b.png",
        head:"Dapp Store and game studio integration",
        text:"Decentralized applications are a set of programs that harness excess power from different nodes globally.",
    },
    {
       
        img:"./assets/d.png",
        head:"Gamer/devs can introduce their own token Crafting",
        text:"Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely",
    },
    {
       
        img:"./assets/e.png",
        head:"In-Games Items Crafting",
        text:"In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games",
    },
]
    console.log(JSON.stringify(data));
  return (
    <>
    <div className='bg-black'>
        <div className="container">
            <div className="row align-items-stretch">
        {data.map((v,i)=>{
            return <>
            <div className="col-md-4 mb-4 " key={i}>
                <div className={`card text-dark h-100 ${i%2 === 1 && 'bg-danger'}`}>
                    <div className="card-body">
                        
                        <img src={v.img} className="w-25 d-block m-auto" alt="" />
                        <h4>{v.head}</h4>
                        <p>{v.text}</p>
                        <button className=''>read More</button>
                    </div>
                </div>
            </div>
            </>
        })}
        </div>
        </div>
    </div>
    </>
  )
}
export default Mapfun