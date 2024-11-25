import "../style/style.css";
import Image from "next/image";
import HeroPic from "@/app/assets/hero.png"
import Link from "next/link";

function HeroPage() {
  return (
    <div className="container">


        <div className="Image-box">
            {/* left side */}
            <div>
                <Image src={HeroPic} alt="Image" width={700} height={500}  className="Image"/>

            </div>
            {/* right side */}
            <div  className="h1">
                <h1>
                    Welcome to the Students E-Courses Hub<br/> <span className="color">"Step into Success with Short, Effective Courses".</span>
                </h1><br/>
                <p className="descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut officia dicta facere! Pariatur omnis est amet nemo deleniti reiciendis fugit in cupiditate sed ipsa earum repellat aperiam voluptate voluptatibus, quisquam tempore mollitia dignissimos doloremque.</p><br/>
                <Link href="/">
                <button className="btn">Apply Now!</button>
                </Link>
            </div>
        </div>


    </div>
  )
}

export default HeroPage