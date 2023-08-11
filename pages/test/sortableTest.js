import React, { useState } from 'react'
import { sortable } from 'react-sortable'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'

export default function SortableImageList() {
  class Item extends React.Component {
    render() {
      return <li {...this.props}>{this.props.children}</li>
    }
  }

  const SortableItem = sortable(Item)

  class SortableList extends React.Component {
    state = {
      items: this.props.items,
    }

    onSortItems = (items) => {
      this.setState({
        items: items,
      })
    }

    render() {
      const { items } = this.state
      const listItems = items.map((item, i) => {
        return (
          <SortableItem
            key={i}
            onSortItems={this.onSortItems}
            items={items}
            sortId={i}
          >
            <Image src={item} alt="god" width={200} />
          </SortableItem>
        )
      })

      return <ul className="sortable-list">{listItems}</ul>
    }
  }

  const items = [mazuGod, loveGod, studyGod]

  return <SortableList items={items} />
}
