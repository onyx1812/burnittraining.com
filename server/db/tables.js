module.exports = (db, callback) => {

  const tables = [
    {
      name: 'orders',
      sql: `ID INT AUTO_INCREMENT,
            PRIMARY KEY(ID),
            date DATETIME DEFAULT NOW(),
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            email VARCHAR(100),
            phone VARCHAR(20),
            card_number VARCHAR(255),
            exp_month VARCHAR(255),
            exp_year VARCHAR(255),
            card_code VARCHAR(255),
            shipping_name VARCHAR(255),
            country VARCHAR(255),
            state VARCHAR(255),
            city VARCHAR(255),
            line1 VARCHAR(255),
            line2 VARCHAR(255),
            notes VARCHAR(255),
            zip VARCHAR(255),
            status VARCHAR(255),
            subscription VARCHAR(255),
            total VARCHAR(20)`
    }
  ]

  let i = 0;
  tables.forEach(table => {
    let sql = `SELECT 1 FROM ${table.name} LIMIT 1`;
    db.query(sql, (err, result) => {
      if(result){
        console.log(`  Tabsle "${table.name}" exist!`);
        i++
        if(tables.length === i){
          if(callback) callback('end');
        }
      } else{
        sql = `CREATE TABLE ${table.name}(${table.sql})`
        db.query(sql, (err, result) => {
          if(err) throw err
          i++
          console.log(`  Table "${table.name}" created!`);
          const date = new Date();
          if(table.name == 'orders'){
            let order = {
              'date': date,
              'first_name': 'Max',
              'last_name': 'Globa',
              'email': 'max@purpleadlab.com',
              'phone': '380731817768',
              'card_number': '4111111111111111',
              'exp_month': '10',
              'exp_year': '2022',
              'card_code': '123',
              'shipping_name': 'John Doe',
              'country': 'US',
              'state': 'CA',
              'city': 'Los Angeles',
              'line1': '123 Backers avenu',
              'line2': '33 apt.',
              'notes': 'Protein with strawberry',
              'zip': '90201',
              'subscription': 'false',
              'status': 'Pending payment/Processing/On hold/Completed/Cancelled/Refunded/Failed',
              'total': '849',
            };
            sql = 'INSERT INTO orders SET ?';
            db.query(sql, order, (err, result) => {
              if(err) throw err
              console.log('First order was added!')
            });
          }
        })
      }
    })
  })
}