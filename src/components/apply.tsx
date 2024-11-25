import "../style/style.css";
import Image from "next/image";
import banner from "@/app/assets/banner1.jpg"
import React from "react";

function ApplyPage() {
    return (
      <div className="apply-main h-screen">
        
        <div>
        <Image src={banner} alt= "" width={1350} height={190} className="app-img"/>
            
            <h1 className="apply-h1">E-Courses IT Program</h1>
            <h2 className="apply-h2">APPLICATION FOR ADMISSION</h2>
            </div>
       

            <div className="form-cont">
              <form>
                <table width={600} border={5} cellSpacing={15} cellPadding={20}>
                    <tbody>
                    <tr>
                        <th colSpan={2} className="P-I">Personal Information</th>
                    </tr>

                    <tr>
                        <td width="250">  <b>Full Name</b> </td>
                        <td> <input type="text"/> </td> 
                    </tr>

                    <tr>
                        <td> <b>Father Name</b> </td>
                        <td> <input type="text"/> </td> 
                    </tr>

                    <tr>
                        <td> <b>Date of Birth</b> </td>
                        <td> <input type="date"/> </td>
                    </tr>

                    <tr>
                        <td> <b>Gender</b> </td>
                        <td> <input type="radio" name="g"/>Male
                             <input type="radio" name="g"/>Female </td> 
                    </tr>

                    <tr>
                        <td> <b>Age</b> </td>
                        <td> <input type="number" min="16" max="35"/> </td> 
                    </tr> 

                    <tr>
                        <td> <b>Home Address</b> </td>
                        <td> <textarea rows={3} cols={25}></textarea> </td> 
                    </tr>

                    <tr>
                        <td> <b>Country</b> </td>
                        <td> <select>
                            <option>Select City</option>
                            <option>Karachi</option>
                            <option>Hyderabad</option>
                            <option>Larkana</option>
                        </select> </td> 
                    </tr>

                    <tr>
                        <td> <b>Contact Number</b> </td>
                        <td> <input type="tel"/> </td> 
                    </tr>

                    <tr>
                        <td> <b>Email Address</b> </td>
                        <td> <input type="email"/> </td> 
                    </tr> 

                    <tr>
                        <th colSpan={2} className="C-S">Course Selection</th>
                    </tr>

                    <tr>
                        <td> <b> Digital Marketing &nbsp;</b>
                        <input type="checkbox" name="g"/> </td> 
                    </tr>

                    <tr>
                        <td> <b> Graphic Designing &nbsp;</b>
                        <input type="checkbox" name="g"/> </td>
                    </tr>

                    <tr>
                        <td> <b> Video Editing & Animation &nbsp;</b>
                        <input type="checkbox" name="g"/> </td> 
                    </tr>

                    <tr>
                        <td> <b> Web Development &nbsp;</b>
                        <input type="checkbox" name="g"/> </td> 
                    </tr>

                    <tr>
                        <td> <b> Word Press &nbsp;</b>
                        <input type="checkbox" name="g"/> </td> 
                    </tr>

                    <tr>
                        <td> <b> SEO &nbsp;</b>
                        <input type="checkbox" name="g"/> </td> 
                    </tr>

                    <tr>
                        <button className="apply-btn">Submit</button> 
                    </tr>
                  
        
                    </tbody>
                </table>
            </form>
        </div>


      </div>
    )
  }
  
  export default ApplyPage;