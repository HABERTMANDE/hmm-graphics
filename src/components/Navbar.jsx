import { Send, Menu, X } from "lucide-react";
import { useState } from "react";


function Navbar() {


const [open, setOpen] = useState(false);


const telegramLink =
"https://t.me/pioneersschool";



const links = [

["Home","#home"],
["About","#about"],
["Services","#services"],
["Portfolio","#portfolio"],
["Contact","#contact"]

];



return (


<nav className="
fixed
top-0
left-0
w-full
z-50
bg-black/60
backdrop-blur-xl
border-b
border-white/10
">


<div className="
max-w-7xl
mx-auto
px-6
md:px-20
py-5
flex
justify-between
items-center
">






{/* LOGO */}


<a href="#home">


<div>


<h1 className="
text-xl
md:text-3xl
font-extrabold
tracking-tight
text-cyan-400
">


HMM Graphics


</h1>



<p className="
hidden
sm:block
text-xs
text-gray-400
tracking-wide
">


Design • Branding • Media • Training


</p>



</div>


</a>








{/* DESKTOP NAV */}


<ul className="
hidden
md:flex
gap-8
items-center
">


{

links.map(([name,link])=>(


<li key={name}>


<a

href={link}

className="
text-gray-300
hover:text-cyan-400
transition
font-medium
text-sm
"


>


{name}


</a>


</li>


))

}



</ul>









{/* CTA */}


<div className="hidden lg:block">


<a

href={telegramLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
bg-cyan-400
text-black
px-6
py-3
rounded-full
font-semibold
flex
items-center
gap-2
hover:scale-105
transition
"


>


<Send size={16}/>


Join Academy


</button>


</a>


</div>









{/* MOBILE BUTTON */}


<button

className="
md:hidden
text-cyan-400
"

onClick={()=>setOpen(!open)}

>


{

open ?

<X size={28}/> :

<Menu size={28}/>

}


</button>







</div>










{/* MOBILE MENU */}


{

open && (


<div className="
md:hidden
bg-black/95
backdrop-blur-xl
border-t
border-white/10
px-6
py-6
">


<ul className="
flex
flex-col
gap-6
">


{

links.map(([name,link])=>(


<li key={name}>


<a

href={link}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-cyan-400
"


>


{name}


</a>


</li>


))

}



<li>


<a

href={telegramLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
bg-cyan-400
text-black
px-5
py-3
rounded-full
flex
items-center
gap-2
font-semibold
"


>


<Send size={16}/>

Join Academy


</button>


</a>


</li>



</ul>


</div>


)


}



</nav>


)

}


export default Navbar;