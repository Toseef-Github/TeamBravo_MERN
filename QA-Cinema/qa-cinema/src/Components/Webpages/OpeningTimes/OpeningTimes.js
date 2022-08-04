import './OpeningTimes.css';
import Table from 'react-bootstrap/Table';

function OpeningTimes() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Day</th>
          <th>Open</th>
          <th>Close</th>
          <th>Last Film start</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

// function OpeningTimes() {
//     return (
//         <div id="OpenTimesDiv">
//             <h1 id="OpenTimesh1">Opening Times</h1>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Monday</h2>
//                 <p id="OpenTimesp">09:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Tuesday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Wednesday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Thursday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//                 </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Friday</h2>
//                 <p id="OpenTimesp">09:00 - 00:00</p>
//                 </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Saturday</h2>
//                 <p id="OpenTimesp">09:00 - 01:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Sunday</h2>
//                 <p id="OpenTimesp">09:00 - 01:00</p>
//             </div>
//             <div id="OpenTimesDiv3">
//                 <p>Times are subject to change on Bank Holidays.</p>
//             </div>
//         </div>
//     );
// }

export default OpeningTimes;