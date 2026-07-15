import { motion } from "framer-motion";
import { 
  Palette, 
  Lightbulb, 
  Users, 
  Rocket 
} from "lucide-react";


function About() {


return (

<section

id="about"

className="
bg-black
text-white
py-14
lg:py-24
px-6
md:px-8
"


>


<div className="max-w-7xl mx-auto">



<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>





{/* Heading */}

<div className="
text-center
mb-10
lg:mb-16
">


<h2 className="
text-3xl
md:text-5xl
font-bold
text-cyan-400
mb-4
">


About HMM Graphics


</h2>



<p className="
text-base
md:text-xl
text-gray-300
max-w-3xl
mx-auto
">


Transforming ideas into powerful visual experiences
through creativity, technology and innovation.


</p>



</div>









<div className="
grid
md:grid-cols-2
gap-8
lg:gap-12
items-center
">







{/* About Text */}


<div>


<h3 className="
text-2xl
md:text-3xl
font-bold
mb-5
">


Creative Solutions That Communicate Vision


</h3>




<p className="
text-gray-300
leading-relaxed
mb-5
">


HMM Graphics is a creative design and branding studio
dedicated to helping individuals, businesses, ministries
and organizations communicate their vision through
powerful visual solutions.


</p>




<p className="
text-gray-300
leading-relaxed
">


From brand identity and digital designs to event visuals,
media production and creative training, we transform
ideas into designs that inspire, connect and create impact.


</p>



</div>









{/* Creative Values */}


<div className="grid gap-5">





<div className="
bg-slate-900
p-5
rounded-2xl
border
border-cyan-400/20
">


<Palette className="text-cyan-400 mb-3"/>


<h4 className="text-lg font-bold">

Creative Excellence

</h4>


<p className="text-gray-400 mt-2">

Every design is created with purpose,
strategy and attention to detail.

</p>


</div>







<div className="
bg-slate-900
p-5
rounded-2xl
border
border-cyan-400/20
">


<Lightbulb className="text-cyan-400 mb-3"/>


<h4 className="text-lg font-bold">

Vision Driven

</h4>


<p className="text-gray-400 mt-2">

We transform concepts and ideas into
meaningful visual identities.

</p>


</div>








<div className="
bg-slate-900
p-5
rounded-2xl
border
border-cyan-400/20
">


<Users className="text-cyan-400 mb-3"/>


<h4 className="text-lg font-bold">

Empowering Creatives

</h4>


<p className="text-gray-400 mt-2">

Through training, we equip the next
generation of designers.

</p>


</div>







</div>







</div>









{/* Bottom Statement */}


<div className="
mt-10
lg:mt-16
bg-slate-900
rounded-2xl
p-6
lg:p-8
text-center
border
border-cyan-400/20
">


<Rocket

className="
text-cyan-400
mx-auto
mb-4
"

size={35}

/>





<h3 className="
text-xl
md:text-2xl
font-bold
">


Design • Branding • Media • Training


</h3>



<p className="
text-gray-400
mt-3
">


Creating visual excellence through creativity
and innovation.


</p>



</div>







</motion.div>


</div>


</section>


);

}


export default About;