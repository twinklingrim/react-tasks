import { Header } from "../components/header/Header";
import { useAction } from "../ActionContext";
import { AsteroidCard } from "../components/asteroid-card/AsteroidCard";
import { Footer } from "../components/footer/Footer";
export const DestroymentPage = () => {
    const { basket } = useAction();

    return (
        <>
            <Header />
            <div style={{ maxWidth: '920px', margin: '0 auto', padding: '20px' }}>
                <h1>Список на уничтожение</h1>
                
                {basket.length > 0 ? (
                    <div>
                        {basket.map((asteroid) => (
                            <AsteroidCard 
                                key={asteroid.id} 
                                {...asteroid} 
                            />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <p>Вы еще не выбрали ни одного астероида для уничтожения.</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};