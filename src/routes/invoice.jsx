import { useParams } from 'react-router-dom';

export default function Invoice() {
  let params = useParams(); // => {invoiceId: '1995'}
  return <h2>Invoice #{params.invoiceId}</h2>;
}
