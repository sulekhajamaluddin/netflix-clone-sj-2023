//Project Files
import { useModal } from "../../state/ModalProvider";
import SeriesDetails from "./SeriesDetails";

export default function TitleDetails({ title }) {
  const { closeModal } = useModal();

  return (
    <div className="title-details">
      <div className="bg">
        <img src={title.backgroundURL} alt="Background" />
        <div className="overlay"></div>
        <div className="corner-overlay"></div>
        <button onClick={() => closeModal()}>X</button>
      </div>
      <div className="details">
        <span className="heading block">{title.heading}</span>
        <span>{title.description}</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quisquam
          non culpa? A dolorum quisquam, officia sint labore possimus
          repellendus repudiandae numquam repellat recusandae odit consequuntur
          placeat cumque nisi quam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, incidunt facilis, nisi exercitationem,
          assumenda ab ex adipisci quasi ratione deserunt quod dolores maxime
          iusto molestias debitis! Architecto qui expedita minima? Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
          magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
          nunc,
        </p>
        {title.category === "series" && <SeriesDetails series={title} />}
      </div>
    </div>
  );
}
