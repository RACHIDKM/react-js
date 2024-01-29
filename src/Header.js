import LOGO from './assets/—Pngtree—student glyph black icon_4008235.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center bg-[#030303]  px-[50px] text-xl'>
            <img  src={LOGO} alt="logo" className='w-[60px] h-[60px] bg-[#e9543d]   cursor-pointer' />
            <ul className='flex gap-[30px] px-[50px] '>
            <a href="#" class="p-2 text-[#b6b6b6]  rounded-3xl hover:bg-[#e9543d] hover:rounded-3xl hover:text-black ">Home</a>
        <a href="#" class="p-2 text-[#b6b6b6] rounded-3xl hover:bg-[#e9543d] hover:rounded-3xl  hover:text-black">About</a>
        <a href="#" class="p-2 text-[#b6b6b6]  rounded-3xl hover:bg-[#e9543d] hover:rounded-3xl  hover:text-black">Services</a>
        <a href="#" class=" p-2 text-[#b6b6b6]  rounded-3xl hover:bg-[#e9543d] hover:rounded-3xl  hover:text-black">Contact</a>
      
            </ul>
           
        </header>

    )
}








export default Header 