import Register from '../../../components/RegisterVisit';

export default Register;

/*const Visitors: React.FunctionComponent = () => {
  const { client, setIsLoading, setHasError } = useRestClient();
  const [createStatus, setCreateStatus] = React.useState<any>('');
  const [gebaeude, setGebaeude] = React.useState(null);
  React.useEffect(() => {
    async function getGebaude() {
      if (client) {
        const res = await client.getGebauede();
        if (res) setGebaeude(res);
      }
    }
    getGebaude();
  }, []);

  return (
    <>
      {createStatus === 'success' && (
        <Alert severity="success">Besuch erfolgreich angelegt.</Alert>
      )}
      <Register
        buildings={gebaeude}
        createNewVisitor={async props => {
          if (client) {
            setIsLoading(true);
            try {
              const res = await client.postBesucher({
                person: {
                  name: props.name,
                  vorname: props.firstName,
                  email: props.email,
                  telefon: props.phone,
                },
                gesundheitsstatus: 'gesund',
              });
              if (res && res.id) {
                await client.postBesuch({
                  besucher: [res.id],
                  raeume: props.rooms,
                });
              }
              setIsLoading(false);
              setCreateStatus('success');
            } catch (error) {
              setCreateStatus('error');
              setHasError(true);
            }
          }
        }}
      />
    </>
  );
};

export default Visitors;*/
