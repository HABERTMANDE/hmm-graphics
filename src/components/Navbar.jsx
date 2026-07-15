import { Send } from "lucide-react";


function Navbar() {


const telegramLink =
"https://t.me/pioneersschool";



return (

<nav className="
bg-slate-900/95
backdrop-blur-md
text-white
p-5
sticky
top-0
z-50
border-b
border-white/10
">


<div className="max-w-7xl mx-auto flex justify-between items-center">



{/* Logo */}

<a href="#home">

<div>

<h1 className="text-2xl md:text-3xl font-bold text-cyan-400">

HMM Graphics

</h1>


<p className="text-xs text-gray-400">

Design • Branding • Media • Training

</p>


</div>

</a>







{/* Navigation */}

<ul className="
hidden
md:flex
gap-8
items-center
">


{

[
["Home","#home"],
["About","#about"],
["Services","#services"],
["Portfolio","#portfolio"],
["Contact","#contact"]

].map(([name,link])=>(


<li key={name}>


<a

href={link}

className="
hover:text-cyan-400
transition
font-medium
"

>

{name}

</a>


</li>


))


}


</ul>








{/* Academy Button Only */}


<div className="hidden lg:block">


<a

href={telegramLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
border
border-cyan-400
text-cyan-400
px-5
py-2
rounded-full
flex
items-center
gap-2
hover:bg-cyan-400
hover:text-black
transition
"


>


<Send size={16}/>

Academy


</button>


</a>


</div>





</div>


</nav>


)

}


export default Navbar;