'use client'

import { Button } from '@/components/Button'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subsScriptionSchema = z.object({
  name: z.string().min(2, 'Digito seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubsScriptionSchema = z.infer<typeof subsScriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubsScriptionSchema>({
    resolver: zodResolver(subsScriptionSchema),
  })

  function onSubscribe(data: SubsScriptionSchema) {
    console.log(data)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubscribe)}
        className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      >
        <h2 className="font-heading font-semibold text-gray-200 text-xl">
          Inscrição
        </h2>

        <div className="space-y-3">
          <div className="space-y-2">
            <InputRoot>
              <InputIcon>
                <User />
              </InputIcon>
              <InputField
                type="text"
                placeholder="Nome completo"
                {...register('name')}
              />
            </InputRoot>
            {errors.name && (
              <span className="text-danger text-xs font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot>
              <InputIcon>
                <Mail />
              </InputIcon>
              <InputField
                type="email"
                placeholder="E-mail"
                {...register('email')}
              />
            </InputRoot>
            {errors.email && (
              <span className="text-danger text-xs font-semibold">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <Button type="submit">
          Confirmar
          <ArrowRight className="size-6" />
        </Button>
      </form>
    </>
  )
}
