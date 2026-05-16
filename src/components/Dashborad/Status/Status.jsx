  import CardStatus from "../../ui/CardStatus/CardStatus"

function Status() {
  return (
<section className='py-4'>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-3">
     <CardStatus counter="120" title="Projects" icon="fa-solid fa-list-check"/>
            </div>


             <div className="col-12 col-md-3">     <CardStatus counter="130" title="Users" icon="fa-regular fa-user" /></div>
             <div className="col-12 col-md-3">     <CardStatus counter="150" title="Developers" icon="fa-solid fa-list"/></div>
             <div className="col-12 col-md-3">     <CardStatus counter="80" title="Blogs" icon="fa-solid fa-blog" /></div>
        </div>
    </div>
</section>
  )
}

export default Status
