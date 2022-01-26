import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('filter'));
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          type="text"
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            key={invoice.number}
            to={`/invoices/${invoice.number}`}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
