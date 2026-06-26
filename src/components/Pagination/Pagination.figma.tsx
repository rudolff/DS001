import figma from '@figma/code-connect'
import { Pagination } from './Pagination'

figma.connect(
  Pagination,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-899',
  {
    props: {},
    example: () => (
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    ),
  }
)
