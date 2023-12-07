import { Center } from '@dhis2/ui';
export const NotFound: React.FC = () => {
  return (
    <div>
      <Center>
        <h2>404 - Not Found</h2>
        <p>The requested page could not be found.</p>
        {/* TODO go back to main page */}
      </Center>
    </div>
  );
};
