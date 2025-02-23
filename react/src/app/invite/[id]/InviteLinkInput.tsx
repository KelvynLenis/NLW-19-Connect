'use client'

import { IconButton } from '@/components/IconButton'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <>
      <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>

        <InputField readOnly defaultValue={inviteLink} />
        <IconButton className="-mr-2" onClick={copyLink}>
          <Copy className="size-5" />
        </IconButton>
      </InputRoot>
    </>
  )
}
