import apply from '../../public/images/apply.svg'
import Image from 'next/image'
import { changeProductStatus } from '../../app/(dashsettings)/actions/actions'

function ProductsApplyButton({ id, value }) {
  return (
    <form action={async () => await changeProductStatus(id, value)}>
      <button
        type="submit"
        className="hover:bg-purple-900 
        w-24 h-10 px-3 py-1 bg-purple-600 rounded-full shadow-md shadow-zinc-400 justify-center items-center gap-1 flex"
      >
        <h1 className="text-white text-xs">Aplicar</h1>
        <Image width={30} src={apply} height={30} alt="" />
      </button>
    </form>
  )
}

export default ProductsApplyButton
