import FormSpeaker from "./_components/FormSpeaker";

const FormEventSpeaker = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-yellow50" />
      <FormSpeaker id={params.id} />
    </div>
  );
};

export default FormEventSpeaker;
