import React from 'react'
import classes from './Header.module.css'
import { CiLocationOn } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import LowerHeader from './LowerHeader';


const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn size={25}/>
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Products" />
              <FiSearch size={25} />
          </div>

          {/* Right side links */}
          <div className={classes.order_container}>
            <a href='' className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                alt="us flag"
              />
              <select>
                <option value="" id=''>EN</option>
              </select>
            </a>
            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p> <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p> <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className= {classes.cart}>
                <LuShoppingCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header


