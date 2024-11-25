import Header from "@/components/header";
import HeroPage from "@/components/hero";
import CoursesPage from "@/components/courses";
import Footer from "@/components/footer";
import ApplyPage from "@/components/apply";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <CoursesPage/>
      <ApplyPage/>
      <Footer/>

    </div>
  );
}
