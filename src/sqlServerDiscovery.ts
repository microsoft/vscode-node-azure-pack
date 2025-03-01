import * as mssql from 'mssql';

export async function autoDiscoverSqlServers(): Promise<string[]> {
    try {
        const pool = await mssql.connect('your-connection-string-here');
        const result = await pool.request().query('SELECT name FROM sys.servers');
        return result.recordset.map((row: any) => row.name);
    } catch (err) {
        console.error('Error discovering SQL servers:', err);
        throw err;
    }
}

export async function autoDiscoverDatabases(serverName: string): Promise<string[]> {
    try {
        const pool = await mssql.connect(`your-connection-string-here;server=${serverName}`);
        const result = await pool.request().query('SELECT name FROM sys.databases');
        return result.recordset.map((row: any) => row.name);
    } catch (err) {
        console.error('Error discovering databases:', err);
        throw err;
    }
}
