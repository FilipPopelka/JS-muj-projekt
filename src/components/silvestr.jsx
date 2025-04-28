export const Silvestr = () => {
    
    const name1 = 'Silvestr';
    const image1 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
    const text1 = 'Silvestr rád pozoruje dění za oknem';

    return(
    <div className="plushy">
    <img className="plushy__image"src={image1} />
    <h2 className="plushy__name">{name1}</h2>
    <p className="plushy__text">{text1}</p>
    </div>
    );
};

