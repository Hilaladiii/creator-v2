import FormSponsor from "./_components/FormSponsor";

const FormEventSpeaker = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-yellow50" />
      <FormSponsor id={params.id} />
    </div>
  );
};

export default FormEventSpeaker;
