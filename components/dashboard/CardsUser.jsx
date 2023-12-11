import { getAllUsers } from '../../app/lib/services/users'
import CardUser from './CardUser'
import { Suspense } from 'react'

const CardsUser = async ({ activeFilter }) => {
  const users = await getAllUsers({ activeFilter })
  if (users.length === 0) {
    return <h1>No se encontrarón usuarios</h1>
  }
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            name={user.name}
            lastName={user.lastName}
            email={user.email}
            rol={user.rol}
            image={user.image}
          />
        ))}
      </Suspense>
    </>
  )
}

export default CardsUser
