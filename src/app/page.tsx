import BlogPostSlide from "@/componets/BlogPostSlide";
import BlogSlide from "@/componets/blogSlide/BlogSlide";
import Departments, {WebDepartment} from "@/componets/department/Departments";
import Hero, {WebHero} from "@/componets/hero/Hero";
import { Trend, ListTag, RightArrow } from "@/componets/IconsPalette";
import KeyLinks, { WebKeyLinks } from "@/componets/keylinks/KeyLinks";
import NewsLetter from "@/componets/newsletter/NewsLetter";
import ProgramsSlide from "@/componets/ProgramsSlide";
import Quote, { WebQuote } from "@/componets/quote/Quote";
import Services from "@/componets/services/Services";


export default function Home() {
  return (
    <main className="index_main">
      <Hero/>
      <WebHero/>
      <KeyLinks/>
      <WebKeyLinks/>
      <Quote/>
      <WebQuote/>
      <Departments/>
      <WebDepartment/>
      <Services/>
      <ProgramsSlide/>
      <BlogSlide />
      <NewsLetter/>
    </main>
  );
}
