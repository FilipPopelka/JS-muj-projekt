export const Ctirad = () => {
    
    const name2 = 'Ctirad';
    const image2 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
    const text2 = 'Ctirad tráví svůj čas v blízkosti lednice';

    return(
    <div className="plushy">
    <img className="plushy__image"src={image2} />
    <h2 className="plushy__name">{name2}</h2>
    <p className="plushy__text">{text2}</p>
    </div>
    );
};