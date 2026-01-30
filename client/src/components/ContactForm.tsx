import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs tracking-widest text-neutral-500">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="border-0 border-b border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs tracking-widest text-neutral-500">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    type="email"
                    {...field} 
                    className="border-0 border-b border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs tracking-widest text-neutral-500">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="resize-none min-h-[120px] border-0 border-b border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isPending}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-neutral-950 px-8 font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:w-full w-40 disabled:opacity-50 disabled:hover:w-40"
        >
          <span className="mr-2 uppercase tracking-widest text-sm">Send Message</span>
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <div className="absolute right-0 translate-x-full opacity-0 transition-all group-hover:-translate-x-4 group-hover:opacity-100">
              →
            </div>
          )}
        </button>
      </form>
    </Form>
  );
}
