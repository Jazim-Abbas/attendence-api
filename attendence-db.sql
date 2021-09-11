--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--





--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5738d021d4bc194576641fa9936656836';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: apply_leave; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apply_leave (
    id smallint NOT NULL,
    subject character varying(100) NOT NULL,
    description character varying(255) NOT NULL,
    "from" date NOT NULL,
    "to" date NOT NULL,
    leave_status character varying DEFAULT 'PENDING'::character varying NOT NULL,
    leave_category smallint NOT NULL,
    staff smallint NOT NULL
);


ALTER TABLE public.apply_leave OWNER TO postgres;

--
-- Name: apply_leave_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.apply_leave_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.apply_leave_id_seq OWNER TO postgres;

--
-- Name: apply_leave_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.apply_leave_id_seq OWNED BY public.apply_leave.id;


--
-- Name: attendence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attendence (
    id bigint NOT NULL,
    time_in character varying(50),
    time_out character varying(50),
    date_created date NOT NULL,
    staff smallint NOT NULL
);


ALTER TABLE public.attendence OWNER TO postgres;

--
-- Name: attendence_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attendence_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendence_id_seq OWNER TO postgres;

--
-- Name: attendence_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attendence_id_seq OWNED BY public.attendence.id;


--
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.department (
    id smallint NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(13) NOT NULL,
    email character varying(500),
    address character varying(500)
);


ALTER TABLE public.department OWNER TO postgres;

--
-- Name: department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.department_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.department_id_seq OWNER TO postgres;

--
-- Name: department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;


--
-- Name: job_title; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job_title (
    id smallint NOT NULL,
    name character varying(255) NOT NULL,
    allowed_leaves smallint
);


ALTER TABLE public.job_title OWNER TO postgres;

--
-- Name: job_title_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.job_title_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.job_title_id_seq OWNER TO postgres;

--
-- Name: job_title_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.job_title_id_seq OWNED BY public.job_title.id;


--
-- Name: leave_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leave_category (
    id smallint NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.leave_category OWNER TO postgres;

--
-- Name: leave_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.leave_category_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.leave_category_id_seq OWNER TO postgres;

--
-- Name: leave_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.leave_category_id_seq OWNED BY public.leave_category.id;


--
-- Name: staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staff (
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    gender character varying(10) NOT NULL,
    dob date,
    phone character varying(13),
    joining_date date,
    address character(500),
    image character(1024),
    is_admin boolean DEFAULT false,
    id smallint NOT NULL,
    department smallint,
    job_title smallint
);


ALTER TABLE public.staff OWNER TO postgres;

--
-- Name: staff_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.staff_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.staff_id_seq OWNER TO postgres;

--
-- Name: staff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;


--
-- Name: apply_leave id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply_leave ALTER COLUMN id SET DEFAULT nextval('public.apply_leave_id_seq'::regclass);


--
-- Name: attendence id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendence ALTER COLUMN id SET DEFAULT nextval('public.attendence_id_seq'::regclass);


--
-- Name: department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);


--
-- Name: job_title id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_title ALTER COLUMN id SET DEFAULT nextval('public.job_title_id_seq'::regclass);


--
-- Name: leave_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leave_category ALTER COLUMN id SET DEFAULT nextval('public.leave_category_id_seq'::regclass);


--
-- Name: staff id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);


--
-- Data for Name: apply_leave; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.apply_leave (id, subject, description, "from", "to", leave_status, leave_category, staff) FROM stdin;
1	Sick	Description	2021-09-11	2021-09-15	ACCEPTED	2	1
\.


--
-- Data for Name: attendence; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attendence (id, time_in, time_out, date_created, staff) FROM stdin;
\.


--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department (id, name, phone, email, address) FROM stdin;
\.


--
-- Data for Name: job_title; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job_title (id, name, allowed_leaves) FROM stdin;
\.


--
-- Data for Name: leave_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.leave_category (id, name) FROM stdin;
2	category
\.


--
-- Data for Name: staff; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.staff (first_name, last_name, email, password, gender, dob, phone, joining_date, address, image, is_admin, id, department, job_title) FROM stdin;
Jazim	Abbas	jazim@gmail.com	password	MALE	\N	\N	2021-03-21	Lahore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	\N	f	1	\N	\N
\.


--
-- Name: apply_leave_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.apply_leave_id_seq', 1, true);


--
-- Name: attendence_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.attendence_id_seq', 1, false);


--
-- Name: department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.department_id_seq', 1, true);


--
-- Name: job_title_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.job_title_id_seq', 6, true);


--
-- Name: leave_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.leave_category_id_seq', 2, true);


--
-- Name: staff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.staff_id_seq', 4, true);


--
-- Name: apply_leave apply_leave_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply_leave
    ADD CONSTRAINT apply_leave_pkey PRIMARY KEY (id);


--
-- Name: attendence attendence_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendence
    ADD CONSTRAINT attendence_pkey PRIMARY KEY (id);


--
-- Name: department department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);


--
-- Name: job_title job_title_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_title
    ADD CONSTRAINT job_title_pkey PRIMARY KEY (id);


--
-- Name: leave_category leave_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leave_category
    ADD CONSTRAINT leave_category_pkey PRIMARY KEY (id);


--
-- Name: staff staff_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_email_key UNIQUE (email);


--
-- Name: staff staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (id);


--
-- Name: fk_lc_apl; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_lc_apl ON public.apply_leave USING btree (leave_category);


--
-- Name: fk_staff_apply_leave; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_staff_apply_leave ON public.apply_leave USING btree (staff);


--
-- Name: fk_staff_attendence; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_staff_attendence ON public.attendence USING btree (staff);


--
-- Name: fki_staff_dept; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_staff_dept ON public.staff USING btree (department);


--
-- Name: fki_staff_jobtitle; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_staff_jobtitle ON public.staff USING btree (job_title);


--
-- Name: apply_leave apply_leave_leave_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply_leave
    ADD CONSTRAINT apply_leave_leave_category_fkey FOREIGN KEY (leave_category) REFERENCES public.leave_category(id) NOT VALID;


--
-- Name: apply_leave apply_leave_staff_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply_leave
    ADD CONSTRAINT apply_leave_staff_fkey FOREIGN KEY (staff) REFERENCES public.staff(id) NOT VALID;


--
-- Name: attendence attendence_staff_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendence
    ADD CONSTRAINT attendence_staff_fkey FOREIGN KEY (staff) REFERENCES public.staff(id) NOT VALID;


--
-- Name: staff staff_dept; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_dept FOREIGN KEY (department) REFERENCES public.department(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;


--
-- Name: staff staff_jobtitle; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_jobtitle FOREIGN KEY (job_title) REFERENCES public.job_title(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

