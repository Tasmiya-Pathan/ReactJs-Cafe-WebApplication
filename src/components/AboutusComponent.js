import React from 'react'

function AboutusComponent() {
  return (


    <div className="container mb-5 mt-5" >
    <div class="alert alert-success" role="alert">
    Welcome to CafetTera! Learn more about our story and mission !
        </div>

        <div className="card shadow mt-1 mb-1">
      <div className="card-body">
      <h5 className="card-title"><span class="badge badge-success">Our Story</span></h5>
          <p className="card-text">
          At Cafettera, our journey began with a simple idea - to create a warm and inviting space where people can
            savor delightful moments over a cup of freshly brewed coffee and a plate of carefully crafted dishes.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis sed purus auctor commodo.
          </p>
       
      </div>
    </div>
    

    <div className="card shadow">

      <div className="card-body">
      <h5 className="card-title"><span class="badge badge-success">Good Food, Good Times</span></h5>
          <p className="card-text">
            At CafetTera, we are passionate about creating a culinary experience that goes beyond the ordinary. From
            hearty breakfasts to mouth-watering lunches and indulgent desserts, our menu is designed to satisfy every
            palate. Join us for good food and good times!
          </p>
       
      </div>
    </div>
    <div className="card shadow mt-1">
      <div className="card-body">
      <h5 className="card-title"><span class="badge badge-success">Our Mission</span></h5>
          <p className="card-text">
            At CafetTera, we are passionate about creating a culinary experience that goes beyond the ordinary. From
            hearty breakfasts to mouth-watering lunches and indulgent desserts, our menu is designed to satisfy every
            palate. Join us for good food and good times!
          </p>
       
      </div>
    </div>
  </div>


   
  )
}
const styles = {
  backgroundImage: {
    background: 'url("bg2.jpg") center/cover no-repeat',
  },
};
export default AboutusComponent