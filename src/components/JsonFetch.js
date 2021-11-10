import useJsonFetch from '../hooks/useJsonFetch';

export default function JsonFetch({url}) {
  const [{data, loading, error}] = useJsonFetch(url, []);

  return (
    <>
      {loading && <span style={{color:'orange'}}>Загрузка...</span>}
      {data && <span>Содержимое data: <span style={{color:'green'}}>{Object.keys(data)}: {Object.values(data)}</span></span>}
      {error && <span style={{color: 'red'}}>Ошибка загрузки страницы</span>}
    </>
  )
}