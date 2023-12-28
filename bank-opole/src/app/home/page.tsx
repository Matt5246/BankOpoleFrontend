import { ModeToggle } from '@/components/toggleTheme';

export default function Home() {
    return (
        <header className='size-full'>
            <h1 className="text-4xl font-bold">Bank App</h1>
            <ModeToggle />
        </header>
    );
};

