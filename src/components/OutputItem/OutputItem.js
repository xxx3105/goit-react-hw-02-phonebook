import { OutputPlace } from 'components/Outputs/Output.syled';
import { DelBut, СontactDesign } from 'components/OutputItem/OutputItem.styled';

export const OutputItem = ({ datas, deleteCont }) => {
  return (
    <OutputPlace>
      {datas.map(contact => (
        <СontactDesign key={contact.id}>
          <b>{contact.name}</b>: {contact.number}{' '}
          <DelBut type="button" onClick={e => deleteCont(contact.id)}>
            Delete
          </DelBut>
        </СontactDesign>
      ))}
    </OutputPlace>
  );
};
