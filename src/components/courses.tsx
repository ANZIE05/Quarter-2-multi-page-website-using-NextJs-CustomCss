import "../style/style.css";
import Image from "next/image";
import DM from "@/app/assets/d-m.png"
import { FaTachographDigital } from "react-icons/fa6";
import GD from "@/app/assets/g-d.png"
import { SiAffinitydesigner } from "react-icons/si";
import VE from "@/app/assets/v-e.png"
import { FaVideo } from "react-icons/fa6";
import WD from "@/app/assets/w-d.jpg"
import { PiCodeFill } from "react-icons/pi";
import WP from "@/app/assets/w-p.jpg"
import { BsWordpress } from "react-icons/bs";
import SEO from "@/app/assets/seo.jpg"
import { TbSeo } from "react-icons/tb";


function CoursesPage() {
  return (
    <div className="main id='page1'">
        <div className="container1">
            {/* top div */}
            <div className="container2 ">
                <h2 className="title">Our Courses</h2>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio dolor repellendus ducimus ratione temporibus quo earum quasi, aliquam atque perspiciatis doloremque sint, ipsam, sapiente perferendis unde minus similique saepe.</p>
            </div>
            {/* bottom div */}
            <div className="box-container">

                <section className="box">
                    <Image src={DM} alt="Picture" width={250} height={170} className="img"/>
                    <FaTachographDigital className="sec1"/>
                    <h3 className="head1">Digital Marketing</h3>
                </section>

                <section className="box">
                <Image src={GD} alt="Picture" width={250} height={170} className="img"/>
                    <SiAffinitydesigner className="sec1"/>
                    <h3 className="head1">Graphic Designing</h3>
                </section>
                <section className="box">
                <Image src={VE} alt="Picture" width={250} height={170} className="img"/>
                    <FaVideo className="sec1"/>
                    <h3 className="head1">Video Editing & Animation</h3>
                </section>
                <section className="box">
                <Image src={WD} alt="Picture" width={250} height={170} className="img"/>
                    <PiCodeFill className="sec1"/>
                    <h3 className="head1">Web Development</h3>
                </section>
                <section className="box">
                <Image src={WP} alt="Picture" width={250} height={170} className="img"/>
                    <BsWordpress className="sec1"/>
                    <h3 className="head1">Word Press</h3>
                </section>
                <section className="box">
                <Image src={SEO} alt="Picture" width={250} height={170} className="img"/>
                    <TbSeo className="sec1"/>
                    <h3 className="head1">Search Engine Optimization</h3>
                </section>
            </div>

        </div>

    </div>
  )
}

export default CoursesPage;