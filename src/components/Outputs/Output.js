import { NameOfList, OutputConainer } from './Output.syled';
import { OutputItem } from '../OutputItem/OutputItem';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Output = ({ datas, deleteCont, datasSearch, onChangeReq }) => {
  return (
    <OutputConainer>
      <NameOfList>Contacts:</NameOfList>
      <SearchBar datasSearch={datasSearch} onChangeReq={onChangeReq} />
      <OutputItem datas={datas} deleteCont={deleteCont} />
    </OutputConainer>
  );
};

// import {
//   NameOfList,
//   OutputConainer,
//   OutputPlace,
//   СontactDesign,
// } from './Output.syled';

// export const Output = ({ datas }) => {
//   return (
//     <OutputConainer>
//       <NameOfList>Contacts:</NameOfList>

//       <OutputPlace>
//         {datas.map(contact => (
//           <СontactDesign key={contact.id}>
//             <b>{contact.name}</b>: {contact.number}
//           </СontactDesign>
//         ))}
//       </OutputPlace>
//     </OutputConainer>
//   );
// };
