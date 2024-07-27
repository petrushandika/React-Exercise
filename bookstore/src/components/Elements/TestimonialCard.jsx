import Person from "../../assets/person.jpg";

export const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-3 rounded bg-backgroundsecondary p-5">
      <h3 className="font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        consectetur maxime sequi at magni omnis a nulla, minus, totam quaerat
        vel suscipit exercitationem.
      </p>
      <div className="flex flex-row gap-3">
        <img
          className="w-14 rounded-full"
          src={Person}
          alt=""
        />
        <div>
          <p className="font-medium">Jamal udin</p>
          <p>Scammer</p>
        </div>
      </div>
    </div>
  );
};
