import { reactive } from 'vue'

interface ShareState {
  isOpen: boolean
  title: string
  content: string
  url: string
  note?: string
  tags?: Array<{ text: string, type: string }>
}

export const shareState = reactive<ShareState>({
  isOpen: false,
  title: '',
  content: '',
  url: '',
  note: '',
  tags: []
})

export function openShare(title: string, content: string, url: string, tags: Array<{ text: string, type: string }> = [], note: string = '') {
  shareState.title = title
  shareState.content = content
  shareState.url = url
  shareState.note = note
  shareState.tags = tags
  shareState.isOpen = true
}

export function closeShare() {
  shareState.isOpen = false
}
