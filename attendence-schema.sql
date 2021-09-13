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

ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_jobtitle;
ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_dept;
ALTER TABLE ONLY public.attendence DROP CONSTRAINT attendence_staff_fkey;
ALTER TABLE ONLY public.apply_leave DROP CONSTRAINT apply_leave_staff_fkey;
ALTER TABLE ONLY public.apply_leave DROP CONSTRAINT apply_leave_leave_category_fkey;
DROP INDEX public.fki_staff_jobtitle;
DROP INDEX public.fki_staff_dept;
DROP INDEX public.fk_staff_attendence;
DROP INDEX public.fk_staff_apply_leave;
DROP INDEX public.fk_lc_apl;
ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_pkey;
ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_email_key;
ALTER TABLE ONLY public.leave_category DROP CONSTRAINT leave_category_pkey;
ALTER TABLE ONLY public.job_title DROP CONSTRAINT job_title_pkey;
ALTER TABLE ONLY public.department DROP CONSTRAINT department_pkey;
ALTER TABLE ONLY public.attendence DROP CONSTRAINT attendence_pkey;
ALTER TABLE ONLY public.apply_leave DROP CONSTRAINT apply_leave_pkey;
ALTER TABLE public.staff ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.leave_category ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.job_title ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.department ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.attendence ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.apply_leave ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.staff_id_seq;
DROP TABLE public.staff;
DROP SEQUENCE public.leave_category_id_seq;
DROP TABLE public.leave_category;
DROP SEQUENCE public.job_title_id_seq;
DROP TABLE public.job_title;
DROP SEQUENCE public.department_id_seq;
DROP TABLE public.department;
DROP SEQUENCE public.attendence_id_seq;
DROP TABLE public.attendence;
DROP SEQUENCE public.apply_leave_id_seq;
DROP TABLE public.apply_leave;
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
    staff smallint NOT NULL,
    status character varying(50) DEFAULT 'ABSENT'::character varying
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

