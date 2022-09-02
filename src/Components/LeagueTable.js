import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// <!-- #display a table for all the id's for the leagues and teams



// # league id: 2 Name UEFA Champions League
// # league id 3 Name: UEFA Europa League
// # league id 39 Name: Premier League
// # league id: 61 Name Ligue 1
// # league id: 78 Name: Bundesliga
// # league id: 88 Name: Eredivisie
// # league id: 94 Name: Primeira Liga
// # league id: 135 Name: Serie A
// # league id: 140 Name: La Liga
// # league id: 253 Name: Major League Soccer -->

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'leagueName', headerName: 'LeagueName', width: 250 },   
  ];
  
  const rows = [
    {id: 2, leagueName: 'UEFA Champions League'},
    {id: 3, leagueName: 'UEFA Europa League'},
    {id: 39, leagueName: 'Premier League'},
    {id: 61, leagueName: 'Ligue 1'},
    {id: 78, leagueName: 'Bundesliga'},
    {id: 88, leagueName: 'Eredivisie'},
    {id: 94, leagueName: 'Primeira Liga'},
    {id: 135, leagueName: 'Serie A'},
    {id: 140, leagueName: 'La Liga'},
    {id: 253, leagueName: 'Major League Soccer'},
  ];
  
  export default function LeagueTable() {
    return (
      <div style={{ height: 630, width: '100' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}       
        />        
      </div>
    );
  }