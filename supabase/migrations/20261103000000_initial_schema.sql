create table public.students (
    id bigint generated always as identity primary key,
    name text not null,
    age integer not null,
    address text not null,
    email text not null
);

alter table public.students enable row level security;

create policy "Anyone can read students"
    on public.students for select
    using (true);

grant select on public.students to anon, authenticated;

insert into public.students (name, age, address, email)
values
    ('John Doe', 20, '123 Main St', 'john.doe@example.com'),
    ('Jane Smith', 25, '456 Oak Ave', 'jane.smith@example.com'),
    ('Alice Johnson', 22, '789 Pine Rd', 'alice.johnson@example.com');
