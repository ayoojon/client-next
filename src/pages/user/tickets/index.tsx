import { Ticket } from '@/components/user/tickets/Ticket';
import { eventStatus, IEventTicket } from '@/types/event';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import AyoojonBackdrop from '@/components/shared/Backdrop';
import Pagination, { IPagination } from '../../../components/Pagination';
import { APP_TITLE, ayoojonApi } from '../../../config';

import { tokenConfig } from '../../../utils';
import { useAppSelector } from '@/components/shared/hooks/redux';
import { useRouter } from 'next/router';
import SEO from '@/components/shared/SEO';

interface IData {
  tickets: IEventTicket[];
  pagination: IPagination;
}

const fetchTickets = async (page: Number, status: eventStatus | undefined) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`tickets/user?pageNumber=${page}${status ? `&status=${status}` : ''}`, headers);
  return {
    tickets: response.data.data,
    pagination: response.data.pagination,
  };
};

const UserTicketsPage = () => {
  const [ticketStatus, setTicketStatus] = useState<eventStatus>();
  const [page, setPage] = useState<Number>(1);
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }
  const { status, data, isLoading } = useQuery<IData>(
    ['tickets', page, ticketStatus],
    () => fetchTickets(page, ticketStatus),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (status === 'error') return <div>No ticket found !!!</div>;

  return (
    <>
      <SEO siteTitle="My Tickets" />
      <AyoojonBackdrop open={isLoading} />
      <div className="container mx-auto my-12 px-6">
        <h1 className="font-bold text-4xl mb-5">My Tickets</h1>
        <div className="flex flex-wrap -mx-2">
          <div
            className={`border-b-2 border-transparent px-1 pr-8 py-2 mx-2 text-gray-600 font-semibold hover:text-primary cursor-pointer hover:border-primary transition duration-300 ease-in-out ${
              !ticketStatus ? 'text-primary border-primary' : ''
            }`}
            onClick={() => setTicketStatus(undefined)}
          >
            All
          </div>
          <div
            className={`border-b-2 border-transparent px-1 pr-8 py-2 mx-2 text-gray-600 font-semibold hover:text-primary cursor-pointer hover:border-primary transition duration-300 ease-in-out ${
              ticketStatus === 'published' ? 'text-primary border-primary' : ''
            }`}
            onClick={() => setTicketStatus('published')}
          >
            Upcoming Events
          </div>
          <div
            className={`border-b-2 border-transparent px-1 pr-8 py-2 mx-2 text-gray-600 font-semibold hover:text-primary cursor-pointer hover:border-primary transition duration-300 ease-in-out ${
              ticketStatus === 'completed' ? 'text-primary border-primary' : ''
            }`}
            onClick={() => setTicketStatus('completed')}
          >
            Completed
          </div>
        </div>
        <div>
          {data?.tickets && data.tickets.length > 0 ? (
            // TODO - Add tickets types
            data.tickets.map((ticket: IEventTicket) => ticket?.event && <Ticket ticket={ticket} key={ticket.slug} />)
          ) : (
            <h2 className="my-6">You don&apos;t have any tickets.</h2>
          )}
        </div>
        {data?.pagination && <Pagination pagination={data.pagination} handler={setPage} />}
      </div>
    </>
  );
};

export default UserTicketsPage;
