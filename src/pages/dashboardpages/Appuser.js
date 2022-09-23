import React from 'react'
import {LANDING_PAGE_URL} from "../../constants/URLS"
import {useNavigate} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Appuser() {
    const nevigate=useNavigate()
  return (
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
   <Navbar/> 
    {/* <!-- End Header --> */}

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>

    {/* <!-- ======= Sidebar ======= --> */}
    <Sidebar/>

    
    <main id="main" class="main">
    <h1>App Users</h1>
    <input type="search" placeholder="Name,Mobile no" /> <br/>
    <table>
        <thead>

            <th><small/>ID&emsp;&emsp;&emsp;</th>
            <th>Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
            <th>Active&emsp;&emsp;&emsp;</th>
            <th>Admin&emsp;&emsp;&emsp;</th>
            <th>Bal Amount&emsp;&emsp;&emsp;</th>
            {/* </small> */}
            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>

        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><b>Om Balsane</b><br/><small>9898525645,Loni</small></td>
                <td><input type="checkbox" ></input></td> <td><input type="checkbox" ></input></td> <td>50000</td>

            </tr>
            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>



            <tr>
                <td>2</td>
                <td><b>Nilesh Kapse</b><br/><small>9145455425,Sambhajinagar</small></td>
                <td><input type="checkbox"></input> </td> <td><input type="checkbox"></input> </td> <td>60000</td>
            </tr>

            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>


            <tr>
                <td>3</td>
                <td><b>Pratik Mahajan</b><br/><small>9191914556,Dhule</small></td>
                <td><input type="checkbox"></input> </td> <td><input type="checkbox"></input> </td> <td>40000</td>
            </tr>

            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>


            <tr>
                <td>4</td>
                <td><b>Akash Waje</b><br/><small>9898985050,Sambhajinagar</small></td>
                <td><input type="checkbox" ></input></td> <td><input type="checkbox" ></input></td> <td>60000</td>
            </tr>

            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>

            <tr>
                <td>5</td>
                <td><b>Mandar Wale</b><br/><small>9145456552,Sangali</small></td>
                <td><input type="checkbox"></input> </td> <td><input type="checkbox" ></input></td> <td>50000</td>
            </tr>

            <tr>
                <td colspan="5">
                    <hr />
                </td>
            </tr>
    </tbody>
    </table></main>
    </div>
  )
}

export default Appuser;