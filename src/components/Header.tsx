import backgroundImage from '../assets/bg.svg';
import iconHeader from '../assets/icon-header.svg'

export default function Header() {
    return (
        <header 
            className="bg-cover bg-center h-64" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col items-center justify-center gap-5 h-full">
                <img 
                    src={iconHeader} 
                    alt="Logo" 
                    className='w-11 h-10'
                />
                <h1 className='font-coda text-2xl text-base-blue'>GITHUB BLOG</h1>
            </div>
            
        </header>
    )
}
