import backgroundImage from '../assets/bg.svg';
import iconHeader from '../assets/icon-header.svg'

export default function Header() {
    return (
        <header 
            className="bg-cover bg-center h-64 w-full" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full flex flex-col justify-center gap-5 h-full">
                <img 
                    src={iconHeader} 
                    alt="Logo" 
                    className='w-11 h-10 mx-auto'
                />
                <h1 className='font-coda text-2xl text-base-blue mx-auto mb-11'>GITHUB BLOG</h1>
            </div>
            
        </header>
    )
}
