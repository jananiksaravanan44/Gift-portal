import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FirstComponent() {
  return (
    <div className='da'>
      <p>Select date of Occassion</p>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
      <TextField className="ba" id="outlined-basic" label="Enter Occassion" variant="outlined" />
      <Stack spacing={2} direction="row">
      <Button variant="outlined">Search</Button>
    </Stack>
    </div>
  );
}


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tooltip from '@mui/material/Tooltip';
// import Stack from '@mui/material/Stack';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const ProSpan = styled('span')({
//   display: 'inline-block',
//   float:"right",
//   height: '1em',
//   width: '1em',
//   verticalAlign: 'middle',
//   marginLeft: '0.3em',
//   marginBottom: '0.08em',
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
// });

// function Label({ componentName, valueType, isProOnly }) {
//   const content = (
//     <span>
//       <strong>{componentName}</strong> for {valueType} editing
//     </span>
//   );

//   if (isProOnly) {
//     return (
//       <Stack direction="row" spacing={0.5} component="span">
//         <Tooltip title="Included on Pro package">
//           <a href="https://mui.com/x/introduction/licensing/#pro-plan">
//             <ProSpan />
//           </a>
//         </Tooltip>
//         {content}
//       </Stack>
//     );
//   }

//   return content;
// }

// export default function CommonlyUsedComponents() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker />
//     </LocalizationProvider>
//     // <LocalizationProvider dateAdapter={AdapterDayjs}>
//     //   <DemoContainer
//     //     components={[
//     //       'DatePicker',
//     //       'TimePicker',
//     //       'DateTimePicker',
//     //       'DateRangePicker',
//     //     ]}
//     //   >
//     //     <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
//     //       <DatePicker />
//     //     </DemoItem>
//     //     <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
//     //       <TimePicker />
//     //     </DemoItem>
//     //     <DemoItem
//     //       label={<Label componentName="DateTimePicker" valueType="date time" />}
//     //     >
//     //       <DateTimePicker />
//     //     </DemoItem>
//     //     <DemoItem
//     //       label={
//     //         <Label
//     //           componentName="DateRangePicker"
//     //           valueType="date range"
//     //           isProOnly
//     //         />
//     //       }
//     //       component="DateRangePicker"
//     //     >
//     //       <DateRangePicker
//     //         localeText={{
//     //           start: '',
//     //           end: '',
//     //         }}
//     //       />
//     //     </DemoItem>
//     //   </DemoContainer>
//     // </LocalizationProvider>
//   );
// }